const colors = (value) => {
    let color = '';
    switch(true){
        case value >= 90:
            color = "#239454"
            break;
        case value < 90 && value > 70:
            color = "#8dc153"
            break;
        case value < 65:
            color = "#e77e23"
            break;
        case value === "CM" || value === "CAM" || value === "CDM" || value === "LM" || value === "RM":
            color = "#8dc153"
            break;	
        case value === "LW" || value === "ST" || value === "RW" || value === "CF":
            color = "#4b89dc"
            break;
        case value === "CB" || value === "RB" || value === "LB":
            color = "#f6bb43"
            break;
        case value === "GK":
            color = "#e9573e"
            break;
        default:
            color = "#239454"

    }
    return color
}
export default colors