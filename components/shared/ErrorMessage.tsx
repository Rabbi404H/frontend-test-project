interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
      <p>{message}</p>
      <p className="text-sm mt-2">Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;