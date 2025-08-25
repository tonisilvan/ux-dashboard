import data from "@/data/mock.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
