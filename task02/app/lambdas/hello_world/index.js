exports.handler = async (event) => {
    console.log("Event Received:", JSON.stringify(event, null, 2));

    // Extract path and method
    const path = event.rawPath || event.path;
    const method = event.requestContext?.http?.method || event.httpMethod;

    // Handle /hello GET request
    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello from Lambda!" }),
        };
    }

    // Return 400 Bad Request for other endpoints
    return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: `Bad Request: ${method} ${path} is not a valid endpoint.` }),
    };
};
