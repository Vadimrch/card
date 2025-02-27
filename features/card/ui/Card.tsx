import {CardBox, CardImage} from "features/card/ui/Card.styled";
import {ButtonStyled} from "shared/ui/components/Button/Button.styled";

export const Card = () => {
    return (
        <CardBox>
            <CardImage />
            <div>
                <ButtonStyled variant={"contained"}>See more</ButtonStyled>
                <ButtonStyled variant={"contained"}>Save</ButtonStyled>
            </div>
        </CardBox>
    )
}