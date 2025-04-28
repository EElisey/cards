import { Card } from "@/types";
import { Box, Typography, Paper } from "@mui/material";

interface CardItemProps {
  card: Card;
}

export const CardItem = ({ card }: CardItemProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 200,
        height: 200,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        marginX: "auto",
      }}
    >
      <Typography variant="h6" noWrap>
        {card.title || "Без заголовка"}
      </Typography>
      <Typography variant="body2" sx={{ flexGrow: 1 }} noWrap>
        {card.description}
      </Typography>
    </Paper>
  );
};
