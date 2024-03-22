import Link from "next/link"

const Button = ({ href, text, icon}) => {
  return (
    <Link href={href}>
      <button className="flex gap-2">
        {icon}
        {text}
      </button>
    </Link>
  )
}

export default Button