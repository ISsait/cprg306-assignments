import Link from 'next/link';

export default function StudentInfo() {
    const linkStyle = "underline text-cyan-600 hover:text-cyan-300";
    return (
      <div>
        <h1>Student Information: Ian Stoesz</h1>
        <p>GitHub Repo URL: <Link className={linkStyle} href="https://github.com/ISsait/cprg306-assignments.git">ISsait</Link></p>
      </div>
    );
}