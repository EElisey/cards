import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

interface HeaderProps {
  onRefresh: () => void;
  isFetching: boolean;
}

export const Header = ({ onRefresh, isFetching }: HeaderProps) => {
  const [isCooldown, setIsCooldown] = useState(isFetching);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCooldown) {
      timer = setTimeout(() => setIsCooldown(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isCooldown]);

  const handleClick = () => {
    onRefresh();
    setIsCooldown(true);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Карточки
        </Typography>
        <Button color="inherit" onClick={handleClick} disabled={isCooldown}>
          {isCooldown ? "Загружается..." : "Обновить"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
