import { Suspense } from "react";
import VerifyEmailForm from "./VerifyEmailForm";


export default function VerifyEmailPage() {

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    }>
      <VerifyEmailForm />
    </Suspense>
  );

}