export { auth as middleware } from '@/lib/auth';

export const config = {
  matcher: ['/profile'],
 runtime: "nodejs",
};
// // middleware.ts
// export const config = {
//   matcher: ["/dashboard/:path*"],
//   runtime: "nodejs", // 👈 Node.js runtime
// };
