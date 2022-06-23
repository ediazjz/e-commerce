import { FunctionComponent } from "react"
import Link from "next/link"
import Image from "next/image"

import { useUser } from "@auth0/nextjs-auth0"
import { UserCircleIcon } from "@heroicons/react/solid"

export const UserIcon: FunctionComponent = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)

  return user && !error && !isLoading ? (
    <div className="mr-4">
      <Link href={`/user/${user?.nickname}`}>
        <Image
          src={
            user?.picture ||
            `https://avatars.dicebear.com/api/avataaars/${user?.nickname}.svg`
          }
          alt={user?.name || "User profile picture"}
          width={32}
          height={32}
          className="rounded-full"
        />
      </Link>
    </div>
  ) : (
    <div className="mr-4">
      <Link href="/api/auth/login">
        <a className="flex items-center">
          <UserCircleIcon className="h-8 w-8" />
        </a>
      </Link>
    </div>
  )
}
