import type { APIRoute } from "astro";

const RSS_FEED = "https://www.youtube.com/feeds/videos.xml?channel_id=UC1B0iXsRUVHFit6dvwnBDlw";

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(RSS_FEED);
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

    const videos = entries.map((entry) => {
      const content = entry[1];
      const id = (content.match(/<yt:videoId>(.*?)<\/yt:videoId>/) || [])[1] || "";
      const title = (content.match(/<title>(.*?)<\/title>/) || [])[1] || "";

      return {
        id,
        title: title
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"'),
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${id}`,
      };
    });

    return new Response(JSON.stringify(videos), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify([]), {
      status: 500,
    });
  }
};