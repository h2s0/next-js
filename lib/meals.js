// 데이터베이스에 도달하고 데이터베이스에서 데이터를 가져올 수 있는 코드 작성
import sql from 'better-sqlite3';

const db = sql('meals.db');

// async 함수로 바꿔주면 promise가 return 됨
export async function getMeals() {
  // 다른 promise 를 await. 임의의 지연이 발생되어 시간이 좀 더 걸리는 작동을 하게 됨
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // run() 은 데이터를 바꿀 때 사용, 하나일 땐 get() 사용 가능, 우리는 전체 받아올 것이기 때문에 all() 사용
  return db.prepare('SELECT * FROM meals').all();
}