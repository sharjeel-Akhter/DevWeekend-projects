

function FilterChips() {
    return (
        <main>
            <div>
                <div className="filter-chips-row">
                    <button className="filter-chip active">All</button>
                    <button className="filter-chip">Live</button>
                    <button className="filter-chip">Gaming</button>
                    <button className="filter-chip">Music</button>
                    <button className="filter-chip">News</button>
                    <button className="filter-chip">Sports</button>
                    <button className="filter-chip">Learning</button>
                    <button className="filter-chip">Fashion</button>
                    <button className="filter-chip">Beauty</button>
                </div>
            </div>
        </main>
    );
}

export default FilterChips;