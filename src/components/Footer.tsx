export default function Footer() {
    return (
        // padding 클래스를 App 컴포넌트와 일치시킴
        <footer className="max-w-4xl mx-auto grid grid-cols-5 gap-5 py-6 px-4 sm:px-6 md:px-[70px] bg-[#22232A] text-white">
            {/* px-6 제거 - 상위 컨테이너에서 padding 처리 */}
            <div>
                <div className="mb-3 text-xl">Author</div>
                <a href="https://github.com/daybreaker42"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer">
                    hansj
                </a>
            </div>

            <div>
                <div className="mb-3 text-xl">Open Source</div>
                <a href="https://tailwindcss.com"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer">
                    tailwindcss
                </a>
            </div>

            <div>
                <div className="mb-3 text-xl">Source</div>
                <a href="https://github.com/daybreaker42/classtime-converter"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer">
                    github
                </a>
            </div>

            <div>
                <div className="mb-3 text-xl">License</div>
                <span>MIT License</span>
            </div>

            <div>
                <div className="mb-3 text-xl">Contact</div>
                <span>june12300039@gmail.com</span>
            </div>
        </footer>
    );
}