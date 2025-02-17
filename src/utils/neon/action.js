"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function getNews() {
  try {
    const news = await sql`SELECT * FROM "News" ORDER BY created_at DESC`;

    if (!news || news.length === 0) {
      console.log("No news available.");
      return [];
    }

    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Hata durumunda boş bir dizi döndür
  }
}
