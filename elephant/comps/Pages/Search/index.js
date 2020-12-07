import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components/native";
import CustomInput from "../../CustomInput";
import TextComp from "../../Text"
import { ScrollView, View, Text } from 'react-native';
import NextButton from "../../NextButton"
import TopNavBar from "../../topNabBar";
import NavBar from "../../NavBar";
import Header from "../../Header";
import {MyContext} from '../../context'
import axios from 'axios';
import SearchResult from "../../searchResult";
import PopularSearch from "../../popularSearch"

const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    flex: 1;
`;

const AdjustedWidth = styled.View`
    width: 100%;
    flex: 0.85;
`;

const ItemContainer = styled.View`
    width: 80%;
    flex: 1;

`;

const ItemBlanket = styled.View`
    width: 100%;
    align-items: center;
`;

const HeaderContainer = styled.View`
    width: 90%;
    flex: 1;
    height: 100px;
    justify-content: center;
    margin-top: 10px;
`;

const popular = [
    "Dance",
    "Social Activity",
    "Video Games",
    "Art"
]

const Search = ({match, history, location}) => {

    const [data, setData] = useState([]);
    const [children, setChildren] = useState([]);
    const context = useContext(MyContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event);
      };

    useEffect(() => {
        const results = data.filter(person =>
            person.student_name.includes(searchTerm)
        );
        
        setSearchResults(results);
    }, [searchTerm]);
    //setup rendering here, only one cube will be visible. When array for interests
    // in api is mapped, more items will be shown.

    useEffect(() => {
        if (context.user.is_educator === false) {
            var config = {
                method: 'get',
                url: `http://elephantidsp.herokuapp.com/user/educators`,
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${context.token}`
                }
            };  
    
            axios(config)
    
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        } else if (context.user.is_educator === true) {
            var config = {
                method: 'get',
                url: `http://elephantidsp.herokuapp.com/user/students`,
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${context.token}`
                }
            };  
    
            axios(config)
    
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        

    }, [])

   

  return (

    
    <Container>
        <TopNavBar></TopNavBar>
        <NavBar home={()=> {
            history.push("/home")
        }} search={()=> {
            history.push("/search/general")
        }} 
        searchicon={require('../../../assets/Search.png')}
        calendar={()=> {
            history.push("/calendarpage")
        }} account={()=> {
            history.push(`/profile/${"ownprofile"}`, {
                ownprofile: true,
                page: "search/general"
            })
        }}></NavBar>    

        <AdjustedWidth >
            <ScrollView
                contentContainerStyle={{
                    alignItems:"center"
                }}
                style={{
                    width: "100%",
                }}
                >
                
                <HeaderContainer>
                {match.params.subname === "general"

                ?
                <CustomInput placeholder={"Search"} border={true} onChange={handleChange} value={searchTerm}>
                </CustomInput>
                :

                <Header
                        text={match.params.subname}
                        padding
                        marginBottom={"0px"}
                        onPress={()=> {
                            history.push(`/category/${location.state.category}`)
                        }}
                > 
                </Header>
                }
                </HeaderContainer>
                
                {match.params.subname === "general"
                ?
                <ItemBlanket>
                    {searchTerm === ""

                    ?

                    <ItemContainer>
                        <TextComp text={"Popular Searches"} weight={"bold"} fontSize={"18px"}></TextComp>
                        {popular.map((o)=> {
                            return <PopularSearch 
                            text={o} 
                            fontSize={"25px"}
                            onPress={() => setSearchTerm(o)}
                        ></PopularSearch>
                        })
                        
                        }
                    </ItemContainer>

                    :
                    <ItemContainer>
                    
                    {data && searchResults.map((o, i)=> {
                        return <SearchResult
                        name={o.name}
                        description={o.description}
                        onPress={() => {
                            history.push(`/profile/${o._id}`, location.state.category === false ? {
                                
                                category: location.state.category,
                                subname: match.params.subname
                            } : {
                                subname: match.params.subname
                            })
                        }}               
                        />
                    })}
                    </ItemContainer>

                    }
                </ItemBlanket>
                
                :
                <ItemContainer>
                {data && data.map((o, i)=> {
                    return <SearchResult
                    name={o.name}
                    description={o.description}
                    onPress={() => {
                        history.push(`/profile/${o._id}`, location.state.category === false ? {
                                
                            category: location.state.category,
                            subname: match.params.subname
                        } : {
                            subname: match.params.subname
                        })
                    }}               
                    />
                })}
                </ItemContainer>
                }
            </ScrollView>
        </AdjustedWidth>
    </Container>


  );
};

Search.defaultProps = {};

export default Search;
