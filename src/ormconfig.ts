import { join } from 'path';
import { ConnectionOptions, DataSource } from 'typeorm';
import config from './config';

const mysql = config().mysql;

const TypeOrmConfig: ConnectionOptions = {
    type: 'mysql',
    host: mysql.host,
    // port: mysql.port,
    username: mysql.username,
    password: mysql.password,
    database: mysql.database,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
    charset: 'UTF8_UNICODE_CI',
  
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: false,
    logger: 'advanced-console',
  
    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    // migrations: [join(__dirname + '/migrations', '**', '*{.ts,.js}')],
  
};

export = TypeOrmConfig;

