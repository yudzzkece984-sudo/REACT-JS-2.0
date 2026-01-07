function StokBarang(props) {
  return (
    <>
      <h1>Stok Barang</h1>
      <div className="border-2 border-black p-4 items-center flex-col">
        <p>nama barang : {props.judul}</p>
        <p>stok barang : {props.stok}</p>
        {props.stok > 0 ? <p className=" bg-green-500 w-20 text-center">Tersedia</p> : <p className=" bg-red-500 p-4 text-white">Tidak Tersedia</p>}
      </div>
    </>
  );
}

export default StokBarang;