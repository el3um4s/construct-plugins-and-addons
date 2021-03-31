https://deno.land/manual/examples/file_server

deno install --allow-net --allow-read https://deno.land/std@0.91.0/http/file_server.ts
file_server --cors

http://localhost:4507/