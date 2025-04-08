import fs from 'node:fs';

// 데이터베이스에 도달하고 데이터베이스에서 데이터를 가져올 수 있는 코드 작성
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

// async 함수로 바꿔주면 promise가 return 됨
export async function getMeals() {
  // 다른 promise 를 await. 임의의 지연이 발생되어 시간이 좀 더 걸리는 작동을 하게 됨
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Error fetching meals!');
  // run() 은 데이터를 바꿀 때 사용, 하나일 땐 get() 사용 가능, 우리는 전체 받아올 것이기 때문에 all() 사용
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer();

  // 저장할 파일, 쓰기를 마치면 실행될 함수
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}`

  // 두 개의 순서가 동일해야한다
  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}