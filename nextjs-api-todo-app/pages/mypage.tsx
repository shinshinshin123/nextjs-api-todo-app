import Link from 'next/link';

function Mypage() {
    return (
        <>
            <p>マイページ</p>
            <Link href="/">
                戻る
            </Link>
        </>
    )
}

export default Mypage;
