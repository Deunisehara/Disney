
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {

    // Grab the movie info from DB

    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          
          // Save the movie data

          setDetailData(doc.data());
        } else {

          // Redirect to home page

          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
      
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;


// import React from 'react';
// import styled from 'styled-components';

// function Details() {
//     return (
//         <Container>
//             <Background>
//                   <img src="https://images2.alphacoders.com/249/249820.jpg" />
//             </Background>

//             <ImageTitle>
//                 {/* <img src="https://w7.pngwing.com/pngs/785/616/png-transparent-scratte-sid-ice-age-romance-title-box-blue-text-logo.png" /> */}
//             </ImageTitle>

//             <Controls>
//                 <PlayButton>
//                     <img src="/images/play-icon-black.png" />
//                     <span> PLAY </span>
//                 </PlayButton>

//                 <TraileButton>
//                     <img src="/images/play-icon-white.png" />
//                     <span> Trailer </span>       
//                 </TraileButton>

//                 <AddButton>
//                      <span>+</span>
//                 </AddButton>

//                 <GroupWatchButton>
//                      <img src="/images/group-icon.png" />
//                 </GroupWatchButton>
//             </Controls>

//             <Subtitle>
//                 2007 | 7M | KIDS, ANIMATTION, FAMILY
//             </Subtitle>

//             <Description>
//                 Cars is a CGI-animated film series and Disney media franchise set in a world populated by anthropomorphic vehicles created by John Lasseter. The franchise began with the 2006 film of the same name, produced by Pixar and released by Walt Disney Pictures. 
//             </Description>

//         </Container>
//     )
// }

// export default Details

// const Container = styled.div`
//     min-height: calc(100vh - 70px);
//     padding: 0 calc(3.5vw + 5px);
//     position: relative;
// `

// const Background = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
//     opacity: 0.8;
    
//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
                         
//     }

// `
// const ImageTitle = styled.div`
//     height: 30vh;
//     width: 35vw;
//     min-width: 200px;
//     min-height: 170px;

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: contain;
        
//     }

// `
// const Controls = styled.div`
//     display: flex;
//     align-items: center;
// `
// const PlayButton = styled.button`
//     border-radius: 4px;
//     font-size: 15px;
//     padding: 0 24px;
//     margin-right: 22px;
//     display: flex;
//     align-items: center;
//     height: 56px;
//     background: rgb (249, 249, 249);
//     border: none;
//     letter-spacing: 1.8px;
//     cursor: pointer;
    
//     &:hover {
//         background: rgb(198, 198, 198);
//     }

// `
// const TraileButton = styled(PlayButton)`
//     background: rgba(0, 0, 0, 0.3);
//     border: 1px solid rgb(249, 249, 249);
//     color: rgb(249, 249, 249);
//     text-transform: uppercase;
// `
// const AddButton = styled.button`
//     width: 44px;
//     height: 44px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     border: 2px solid white;
//     background-color: rgba(0, 0, 0, 0.6);
//     cursor: pointer;
//     margin-right: 16px;

//     span {
//         font-size: 30px;
//         color: white;
//     }
// `
// const GroupWatchButton = styled.button`
//     width: 44px;
//     height: 44px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     border: 2px solid white;
//     background-color: rgba(0, 0, 0);
//     cursor: pointer;
//     margin-right: 16px;


//     span {
//         font-size: 30px;
//         color: white;
//     }

// `

// const Subtitle = styled.div`
//     color: rgb(249, 249, 249);
//     font-size: 15px;
//     min-height: 20px;
//     margin-top: 26px;
// `

// const Description = styled.div`
//     color: rgb(249, 249, 249);
//     font-size: 20px;
//     min-height: 20px;
//     margin-top: 16px;
//     line-height: 1.4;
//     max-width:750px;

// ` 
