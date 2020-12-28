FROM node:12.2.0-alpine as builder

ARG REACT_APP_PROFILE_ARG
ENV REACT_APP_PROFILE=$REACT_APP_PROFILE_ARG

WORKDIR /usr/local/app

COPY ./ ./

RUN npm install --silent
RUN REACT_APP_PROFILE=$REACT_APP_PROFILE npm run build

FROM nginx:1.16.0-alpine

COPY --from=builder /usr/local/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
