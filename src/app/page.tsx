import { prisma } from "@/lib/prisma"


const page = async () => {
  const blogs = await prisma.blog.findMany()
  console.log(blogs)

  return (
    <div>
      {blogs.map((elem) => (
        <div key={elem.id}>
          <h1>タイトル：{elem.title}</h1>
          <p>内容：{elem.content}</p>
          <p>作成日：{elem.publishedat?.toDateString()}</p>
          <hr></hr>
        </div>
      )

      )}
    </div>
  )
}

export default page