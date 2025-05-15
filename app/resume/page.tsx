export default function Resume() {
  return (
    <div className="flex flex-col p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-sansita mb-6">Resume</h1>
      <div className="w-full h-[80vh] border border-gray-300 rounded-lg overflow-hidden">
        <iframe 
          src="/HeeyeonLee_Resume.pdf" 
          className="w-full h-full"
          title="Heeyeon Lee Resume"
        />
      </div>
    </div>
  );
}
