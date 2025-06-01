import { NextRequest, NextResponse } from "next/server";
import { networkInterfaces } from "os";

export async function GET(request: NextRequest) {
  try {
    // Get client IP from request headers
    // const ipAddress = request.headers.get('x-forwarded-for') ||
    //                  request.headers.get('x-real-ip') ||
    //                  request.headers.get('x-client-ip') ||
    //                  'unknown';
    // const ipAddress =
    //   request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    //   request.headers.get("x-real-ip") ||
    //   request.headers.get("x-client-ip") ||
    //   "unknown";
    let ipAddress;
    // Get MAC address of the server (as a fallback)
    let macAddress = "unknown";
    const nets = networkInterfaces();
    // console.log("nets", nets,ipAddress);
    for (const name of Object.keys(nets)) {
      const net = nets[name];
      if (net) {
        for (const netInfo of net) {
          if (netInfo.mac && netInfo.mac !== "00:00:00:00:00:00") {
            macAddress = netInfo.mac;
            ipAddress = netInfo.address;
            break;
          }
        }
      }
      if (macAddress !== "unknown") break;
    }

    return NextResponse.json({
      ipAddress,
      macAddress,
    });
  } catch (error) {
    console.error("Error getting network info:", error);
    return NextResponse.json(
      { error: "Failed to get network information" },
      { status: 500 }
    );
  }
}
