import  { nextTestEnvironmentVariable } from "../settings";

export const nextPage = (req, res) => res.status(200).json({ message: nextTestEnvironmentVariable });
