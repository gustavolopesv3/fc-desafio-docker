FROM golang:bullseye as stage

WORKDIR /app

COPY main.go .

RUN go build main.go

FROM scratch as buddle
WORKDIR /
COPY --from=stage /app/main .
CMD ["./main"]

# run command: docker build -t gustavolopesv3/codeeducation .
