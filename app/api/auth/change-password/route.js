import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: 'არაავტორიზებული' }, { status: 401 });
        }

        const { currentPassword, newPassword } = await req.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ message: 'ორივე ველი სავალდებულოა' }, { status: 400 });
        }

        await dbConnect();
        
        // We know session.user.email exists
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json({ message: 'მომხმარებელი არ მოიძებნა' }, { status: 404 });
        }

        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: 'მიმდინარე პაროლი არასწორია' }, { status: 400 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        return NextResponse.json({ message: 'პაროლი წარმატებით შეიცვალა' }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'შიდა სერვერის შეცდომა' }, { status: 500 });
    }
}
