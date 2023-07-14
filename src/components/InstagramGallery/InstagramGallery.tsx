import * as React from 'react';
import { useEffect, useState } from 'react';

import { InstagramEmbed } from 'react-social-media-embed';

const url =
'https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token={access-token}'
export const InstagramGallery: React.FC<any> = () => {
    const [insta, setInsta] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          const photosArray = data.data.user.edge_owner_to_timeline_media.edges;
          setInsta(photosArray);
        });
    }, []);

    return (
        <div>
            {insta.map((photo: any) => <div><img key={photo.node.id} src={photo.node.display_url}></img></div>)}
        </div>
    );
}

//wxA9tbAytF6bQ7