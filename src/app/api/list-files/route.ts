// pages/api/list-files.ts
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

export async function GET(req: NextApiRequest) {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        const files = data.Contents?.map((item) => item.Key);
        return NextResponse.json({ files }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error listing files" }, { status: 500 });
    }
}
