import React, {useState} from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Navigation from "../../components/main/Navigation/Navigation";

import "./InfiniteScrollPage.sass";
import Loader from "../../components/Loader/Loader";
import {asyncSleep, randomNumber} from "../../helpers/misc";
import onError from "../../helpers/onError";

export default function InfiniteScrollPage() {

  const [items, setItems] = useState<string[]>([]);
  const [itemsLoadingErrored, setItemsLoadingErrored] = useState(false);
  const [itemsLoadingPending, setItemsLoadingPending] = useState(false);
  const [loadedAllItems, setLoadedAllItems] = useState(false);
  const [sentryRef] = useInfiniteScroll({
    loading: itemsLoadingPending,
    hasNextPage: !loadedAllItems,
    onLoadMore: loadItems,
    disabled: itemsLoadingErrored,
    rootMargin: "0px 0px 400px 0px"
  });

  // Load items function
  function loadItems(fromStart: boolean = false) {

    if(fromStart) {
      setItems([]);
      setLoadedAllItems(false);
    }
    setItemsLoadingErrored(false);

    if(itemsLoadingPending) {return;}
    setItemsLoadingPending(true);

    asyncSleep(randomNumber(0, 500))
      .then(() => {

        setItems([...items, ...Array.from(Array(20).keys()).map((i) => (`Item #${items.length + i}`))]);

        // If loaded all items
        if(0) {setLoadedAllItems(true);}
      })
      .catch((error) => {
        setItemsLoadingErrored(true);
        onError(error);
      })
      .finally(() => {
        setItemsLoadingPending(false);
      });
  }

  // Render
  return (
    <div className="InfiniteScrollPage">

      <h1>Infinite Scroll</h1>

      {/* Navigation */}
      <Navigation />

      <hr />

      <div className="items">
        {items.map((item) => (
          <div key={item} className="item">{item}</div>
        ))}

        {/* When empty list */}
        {!itemsLoadingPending && !items.length ? (
          <div className="flex _jcc" style={{marginTop: 20}}>
            No items.
          </div>
        ) : null}

        {!loadedAllItems ? (
          <div ref={sentryRef} />
        ) : null}

        {itemsLoadingPending ? (
          <div className="loader-wrapper">
            <Loader color="#000" size={30} width={3} spinsPerSecond={3} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
