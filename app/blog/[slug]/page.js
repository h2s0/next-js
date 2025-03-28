export default function BlogPostPage({ params }) {

  // nextjs 는 props 를 모든 페이지 컴포넌트에 넘긴다. 그래서 구조분해 할당으로 꺼내 쓸 수 있다. 수동으로 전달할 필요가 없다. 컴포넌트를 수동으로 하는 것이 아니기 때문에

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  )
}