install.packages("data.table")
library(data.table)

dt <- data.table("name=Jesus", "apellido=Salazar")
p1 <- array("salsa, jamon")
print(p1)
class(dt)
p2 <- list("pechuga, mayonesa")
print(p2)
hoy <- Sys.Date()
print(hoy)
hora <- Sys.time()
print(hora)
mifecha <- as.Date("2025-24-09",format="%Y-%d-%m")
print(mifecha)

install.packages("tm")
library(tm)

install.packages("corpus")
library(corpus)

install.packages("wordcloud")
library(wordcloud)

comentarios <- c("El motivo de este correo es para mandarles la invitación al Taller que se llevara acabo el dia de mañana  el cual lleva el nombre de Planeando mi futuro, esto para que vean las opciones de universidades. quedo atenta a sus comentarios", 
                 "En la versión para estudiantes encontrarán en qué consiste el derecho que se menciona, las maneras en las cuales sí se observa este derecho, y también cómo se ve cuando este derecho está siendo vulnerado",
                 "Cada mes se publica un número de esta gaceta en dos versiones, una para docentes y la otra para estudiantes",
                 "Todo debde de ser como es",
                 "Que increible esta esto")

grepl("es", comentarios)
