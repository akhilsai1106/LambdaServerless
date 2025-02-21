exports.handler = async (event) => {
    // Extract HTTP method and path from the event
    const path = event.rawPath || event.path || "";
    const method = event.requestContext?.http?.method || "";

    console.log(`Received request: ${method} ${path}`);

    // Handle only /hello GET requests
    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,  
                message: "Hello from Lambda"  
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
    }

    // Return 400 Bad Request for other endpoints or methods
    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,   
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };
};
