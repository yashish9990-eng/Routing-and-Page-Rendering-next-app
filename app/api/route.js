export function GET(request) {
  console.log("get req:", request);
//   return Response.json();
  return new Response("Hello! Get!");
}

// export function POST(request) {}
// export function DELETE(request) {}
// export function PUT(request) {}
