export default function Timer() {

    return (
        <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Timer</h2>
            <p>0 mins 0 secs</p>
            <div className="flex gap-2">
                <button type="button" className="bg-green-600 px-4 py-2 text-white">Start</button>
                <button type="button" className="bg-red-600 px-4 py-2 text-white">Stop</button>
                <button type="button" className="bg-yellow-600 px-4 py-2 text-white">Reset</button>
            </div>
        </section>
    );
}

