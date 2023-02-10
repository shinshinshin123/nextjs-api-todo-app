import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Todotop() {
  return (
    <>
      <div>
        <p>Todo一覧ページ</p>
      </div>
      <div>
        <Link href="/mypage">
          マイページ
        </Link>
      </div>
      <div>
        <Link href="/todos/create">
          タスク追加
        </Link>
      </div>
      {/* ここから下はtodo一つ一つのidが紐づいているページになるのなる */}
      <div>
        <Link href="/todos/edit">
          タスク編集
        </Link>
      </div>
      <div>
        <Link href="/todos/show">
          タスク詳細
        </Link>
      </div>
    </>
  )
}
