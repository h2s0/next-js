// root 레벨에 추가하여 자동으로 형제 요소나 중첩된 페이지까지 커버하여 애플리케이션 어디에나 일어날 수 있는 모든 not-found 에러를 다룰 수 있다

export default function NotFound() {
  return(
    <main className="not-found">
      <h1>Meal Not found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>
  )
}