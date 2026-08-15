type Props = {
  params: Promise<{forumName: string}>
}

export default async function ForumPage({params}: Props) {
  const forumName = await params

  return (
    <div>
      Hi
    </div>
  )
}
