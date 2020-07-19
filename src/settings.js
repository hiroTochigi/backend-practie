import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const nextTestEnvironmentVariable = process.env.NEXT_TEST_ENV_VARIABLE
