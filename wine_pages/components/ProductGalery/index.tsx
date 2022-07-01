import styled from "styled-components";
import WineCard from "../WineCard";

const Galery = styled.div`
display: flex;
align-items: flex-start;
padding: 0px;
gap: 32px;
flex-wrap: wrap;
position: absolute;
width: 832px;
height: 1225px;
left: 448px;
top: 182px;
`;

export default function ProductGalery() {
	return (
        <Galery>
            <WineCard />
            <WineCard />
            <WineCard />
            <WineCard />
            <WineCard />
            <WineCard />
            <WineCard />
        </Galery>
	);
}
