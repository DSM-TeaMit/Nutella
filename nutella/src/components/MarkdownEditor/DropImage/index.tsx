import { ChangeEvent, useCallback, useState } from "react";
import * as S from "./styles";

interface FileType {
  id: number; // 파일들의 고유값 id
  object: File;
}

const DropImage = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragIn = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDragOut = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      setIsDragging(false);
    },
    []
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer!.files) {
        setIsDragging(true);
      }
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      //   onChangeFiles(e);
      setIsDragging(false);
    },
    // [onChangeFiles]
    []
  );

  return (
    <S.Container
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    />
  );
};

export default DropImage;
