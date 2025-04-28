"use client";

import { useState, useMemo, useEffect } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { useCards } from "@/hooks";
import { CardItem, Footer, Header, SkeletonCard } from "@/view";
import { Card } from "@/types";

const placeholderCard: Card = {
  id: "placeholder",
  title: "Заглушка",
  text: "Это заглушка карточки",
};

const CardsPage = () => {
  const { data, isLoading, isError, refetch, isFetching } = useCards();

  const handleRefresh =  () => {
     refetch();
  };

  if (isError) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Ошибка загрузки
        </Typography>
        <Button onClick={handleRefresh}>Повторить</Button>
      </Box>
    );
  }

  const cardsToDisplay = useMemo(() => {
    let sortedCards = [...(data || [])];

    sortedCards = sortedCards
      .sort((a, b) => {
        if (!a.title && b.title) return 1; 
        if (a.title && !b.title) return -1;

        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;

        return (a.text?.length || 0) - (b.text?.length || 0);
      })
      .slice(0, 7); 

    while (sortedCards.length < 7) {
      sortedCards.push(placeholderCard); 
    }

    return sortedCards;
  }, [data]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header onRefresh={handleRefresh} isFetching={isFetching}/>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 10,

        }}
      >
        {isFetching ? (
          <Grid container spacing={2}>
            {Array.from({ length: 7 }).map((_, key) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={key} justifyContent="center">
                <SkeletonCard />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {cardsToDisplay.map((card, key) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={key} justifyContent="center">
                {card ? <CardItem card={card} /> : <SkeletonCard />}
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default CardsPage;
