FROM nginx:stable

ARG PORT=80

ENV REACT_APP_BASE_URL=http://server.deva.asia/
ENV REACT_APP_METADATA_RESUME=https://server.deva.asia/portfolio/metadata-resume
ENV REACT_APP_METADATA_SKILLS=https://server.deva.asia/portfolio/metadata-skills
ENV REACT_APP_METADATA_RECENT_PROJECTS=https://server.deva.asia/portfolio/recent-projects
ENV REACT_APP_METADATA_PROJECTS=https://server.deva.asia/portfolio/projects

WORKDIR /app

COPY . .

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs && npm install && npm run build

RUN mkdir /var/www/ && cp -r build /var/www/ && cp deployment.conf /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE $PORT

ENTRYPOINT  ["nginx", "-g", "daemon off;"]