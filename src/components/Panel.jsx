function Panel({children, judul}){
    return (
        <div className="Panel">
            {judul && <h2>{judul}</h2>}
            {children}
        </div>
    ); 
};

export default Panel;