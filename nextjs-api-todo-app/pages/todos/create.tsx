import Link from 'next/link';

function Create() {
    return (
        <>
            <p>Todo作成ページ</p>
            <Link href="/">
                戻る
            </Link>
            <div>titleを入力欄</div>
            <div>内容を入力する欄</div>
        </>
    )
}

export default Create;
