import { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokmemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokmemonId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokmemonId}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} >
            <Card isHoverable css={{ padding: 10 }} onClick={onFavoriteClicked}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokmemonId}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>

        </Grid>
    )
}
