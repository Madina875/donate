import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {
      console.log(`server running on: ${PORT} 🕶️`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();


// npm i --save @nestjs/config
// npm install --save @nestjs/sequelize sequelize sequelize-typescript pg
// npm install --save-dev @types/sequelize (podskazka un )


// nest g mo <company> - module yaratadi
// nest g co <company>  --no-spec     - controller yaratadi
// nest g s <company>  --no-spec     - service yaratadi
