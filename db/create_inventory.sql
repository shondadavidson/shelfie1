INSERT INTO productshelfie (name, price, img)
VALUES($1, $2, $3);

select * 
from productshelfie
order by id asc